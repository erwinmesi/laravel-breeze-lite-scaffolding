<div id="nav__menu" class="relative">
    @if ($trigger ?? null)
        <div onclick="toggleNavMenu(event)">
            {{ $trigger }}
        </div>
    @endif

    <div id="nav__menu--floating-panel"
        class="hidden absolute z-50 mt-2 w-48 rounded-md shadow-lg origin-top-right right-0"
        onclick="toggleNavMenu(event, false)">
        <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
            {{ $content }}
        </div>
    </div>
</div>
